//! Required
const User = require('../models/user')
const { notFound, unauthorized, duplicate, cantAddYourself } = require('../lib/errorMessages')
const Article = require('../models/article')
const Posts = require('../models/post')

//! USERS
//? Show User Dashboard
//* WORKING tested
//* ERROR tested
async function currentUserProfile(req, res, next) {
  try {
    const user = await User.findById(req.currentUser._id).populate('createdArticles').populate('createdPosts').populate('comments.user')
    if (!user) throw new Error(unauthorized)
    res.status(200).json(user)
  } catch (err) {
    next(err)
  }
}

//? Show single User profile.
//* WORKING tested
//* ERROR tested
async function getProfile(req, res, next) {
  try {
    const user = req.params.username
    const userProfile = await User.findOne({ username: user }).populate('createdArticles').populate('createdPosts').populate('comments.user').populate('user')
    if (!userProfile) throw new Error(notFound)
    res.status(200).json(userProfile)
  } catch (err) {
    next(err)
  }
}

//? Update details on User profile
//* WORKING tested
//* ERROR tested
async function userUpdate(req, res, next) {
  try {
    console.log('here')
    req.body.user = req.currentUser
    const userId = req.currentUser
    console.log(req.body.username)
    const updatedProfile = await User.findByIdAndUpdate(userId, req.body, { new: true, runValidators: true, context: 'query' })
    if (!updatedProfile) throw new Error(unauthorized)
    res.status(202).json(updatedProfile)
  } catch (err) {
    next(err)
  }
}

//? Delete details on User Profile
//* WORKING tested
//* ERROR tested
async function deleteUser(req, res, next) {
  try {
    const userId = req.currentUser
    const postsToDelete = await Posts.find({ user: req.currentUser._id })
    const articlesToDelete = await Article.find({ user: req.currentUser._id })
    postsToDelete.forEach(post => {
      return post.remove()
    })
    articlesToDelete.forEach(article => {
      return article.remove()
    })
    const profileToDelete = await User.findByIdAndDelete(userId)
    if (!profileToDelete) throw new Error(notFound)
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
}

//! USER/ COMMENTS
//? Comment on User profile
//* WORKING tested
//* ERROR tested
async function userCommentCreate(req, res, next) {
  try {
    console.log('entered')
    req.body.user = req.currentUser
    const id = await req.params.id
    const user = await User.findById(id).populate('comments.user')
    if (!user) throw new Error(notFound)
    user.comments.push(req.body)
    await user.save()
    res.status(201).json(user)
  } catch (err) {
    next(err)
  }
}

//? Delete a Comment if you're the User who posted it
//* WORKING tested
//* ERROR tested
async function userCommentDelete(req, res, next) {
  try {
    const userId = req.params.id
    const commentId = req.params.commentId
    const user = await User.findById(userId)
    if (!user) throw new Error(notFound)
    const commentToDelete = user.comments.id(commentId)
    if (!commentToDelete) throw new Error(notFound)
    if (!commentToDelete.user.equals(req.currentUser._id)) throw new Error(unauthorized)
    await commentToDelete.remove()
    await user.save()
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
}

//! USER/ RATINGS
//? Add a Rating on a User
//* WORKING tested
//* ERROR tested
async function userRatingCreate(req, res, next) {
  try {
    req.body.user = req.currentUser
    const userToRate = req.params.id
    const rating = req.body
    const user = await User.findById(userToRate)
    if (!user) throw new Error(notFound)
    user.ratings.push(rating)
    await user.save()
    res.status(201).json(user)
  } catch (err) {
    next(err)
  }
}

//? Update User Rating
//* WORKING tested
//* ERROR tested
async function editUserRating(req, res, next) {
  try {
    req.body.user = req.currentUser
    const id = req.params.id
    const ratingId = req.params.ratingid
    const user = await User.findById(id)
    if (!user) throw new Error(notFound)
    const ratingToUpdate = user.ratings.id(ratingId)
    if (!ratingToUpdate) throw new Error(notFound)
    if (!ratingToUpdate.user.equals(req.currentUser._id)) throw new Error(unauthorized)
    Object.assign(ratingToUpdate, req.body)
    await user.save()
    res.status(201).json(ratingToUpdate)
  } catch (err) {
    next(err)
  }
}

//! FAVOURITES
//? Get All Favs
//* WORKING tested
//* ERROR tested
async function getAllFavourites(req, res, next) {
  try {
    const user = await User.findById(req.currentUser).populate('favourites.favArticles').populate('favourites.favUsers').populate('favourites.favPosts')
    if (!user) throw new Error(unauthorized)
    res.status(200).json(user.favourites)
  } catch (err) {
    next(err)
  }
}

//? Add an Article to your Favourites
//* WORKING tested
//* ERROR tested
async function addArticleToFavourites(req, res, next) {
  try {
    const id = req.currentUser.id
    const user = await User.findById(id)
    if (!user) throw new Error(unauthorized)
    const article = await Article.findById(req.body.item)
    if (!article) throw new Error(notFound)
    if (user.favourites.favArticles.includes(article._id)) throw new Error(duplicate)
    user.favourites.favArticles.push(article)
    await user.save()
    res.status(201).json(user.favourites.favArticles)
  } catch (err) {
    next(err)
  }
}

//? Add a User to your Favourites.
//* WORKING tested
//* ERROR tested
async function addUserToFavourites(req, res, next) {
  try {
    const id = req.currentUser._id
    const user = await User.findById(id)
    if (!user) throw new Error(unauthorized)
    const friend = await User.findById(req.body.friend)
    if (!friend) throw new Error(notFound)
    console.log(user, friend)
    if (user._id.equals(friend._id)) throw new Error(cantAddYourself)
    if (user.favourites.favUsers.includes(friend._id)) throw new Error(duplicate)
    user.favourites.favUsers.push(friend)
    await user.save()
    res.status(201).json(user.favourites.favUsers)
  } catch (err) {
    next(err)
  }
}

//? Add a Post to your Favourites
//* WORKING tested
//* ERROR tested
async function addPostToFavourites(req, res, next) {
  try {
    const id = req.currentUser.id
    const user = await User.findById(id)
    if (!user) throw new Error(unauthorized)
    const post = await Posts.findById(req.body.posts)
    if (!post) throw new Error(notFound)
    if (user.favourites.favPosts.includes(post._id)) throw new Error(duplicate)
    user.favourites.favPosts.push(post)
    await user.save()
    res.status(201).json(user.favourites.favPosts)
  } catch (err) {
    next(err)
  }
}

//? FAVOURITES DELETE FUNCTION
//? Remove Article from your Favs
//* WORKING tested
//* ERROR tested
async function removeArticleFromFavs(req, res, next) {
  try {
    const id = req.currentUser.id
    console.log(req.currentUser)
    const user = await User.findById(id)
    if (!user) throw new Error(unauthorized)
    if (!user.favourites.favArticles.includes(req.params.id)) throw new Error(notFound)
    await user.favourites.favArticles.remove(req.params.id)
    await user.save()
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
}

//? Remove User from your Friends Favs
//* WORKING tested
//* ERROR tested
async function removeUserFromFavs(req, res, next) {
  try {
    const id = req.currentUser.id
    const user = await User.findById(id)
    if (!user) throw new Error(unauthorized)
    if (!user.favourites.favUsers.includes(req.params.id)) throw new Error(notFound)
    await user.favourites.favUsers.remove(req.params.id)
    await user.save()
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
}

//? Remove Posts from your Posts Favs
//* WORKING tested
//* ERROR tested
async function removePostsFromFavs(req, res, next) {
  try {
    const id = req.currentUser.id
    const user = await User.findById(id)
    if (!user) throw new Error(unauthorized)
    if (!user.favourites.favPosts.includes(req.params.id)) throw new Error(notFound)
    await user.favourites.favPosts.remove(req.params.id)
    await user.save()
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
}

//! Exports
module.exports = {
  updateUser: userUpdate,
  profile: currentUserProfile,
  getProfile,
  deleteUser,
  commentCreate: userCommentCreate,
  commentDelete: userCommentDelete,
  ratingCreate: userRatingCreate,
  editUserRating,
  getAllFavourites,
  favsArticle: addArticleToFavourites,
  favsFriend: addUserToFavourites,
  favsPost: addPostToFavourites,
  favArticlesRemove: removeArticleFromFavs,
  favFriendsRemove: removeUserFromFavs,
  favPostsRemove: removePostsFromFavs
}