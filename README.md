# KEBB Clothes - SEI Group Project 

## OBJECTIVE - 
This is the third project on the Software Engineering Immersive Course with GA and it is a group project

I was put in a group of four, myself and three other classmates of mine. We have to build an app using MERN stack based on what we have just learned over the last 4 weeks and additional resources. 

## DAY ONE
On the first day, we quickly came to a unanimous decision to go with a clothes rental website, a suggestion by one of the group members, inspired by HURR.
https://www.hurrcollective.com/

On the same day, we had the layout of our design done using MIRO and the broke down tasks between frontend and backend which was useful using TRELLO BOARD. We are going into the project fully organised and very well prepared.

Last task of the day. How to allocate the work between frontend and backend. I came up with an idea of splitting into two groups as there are four of us in the group, 2 take on the frontend and another two on the backend. We opted for a random picker and I wound up on the frontend, which I was happy with as long as we got the work done. 

https://trello.com/b/uyWE3M0V/project-3

## DAY TWO

When the real work starts, we setup a Trello board with all the relevant tasks that needed to be done and each member is to assign their name to the tasks they were done, then on completion mark as completed. 

My colleague, Katie and I who are working on the frontend decided to pair code to make committing our work easier to manage. We started the day off building out the main components that we needed in React such as the Homepage , About us, main index page and the show page for each individual item to the design we drew the day before. 

 ## REST OF THE WEEK
Over the next few days, Katie and I kept building components to the design we had on our Miro board, placing elements where they had to be etc. Giving the guys on the backend time to build out the required functionalies for our app. They had this completed by the end of the 3rd day meaning our frontend was now ready to be making requests to the backend by the fourth day. 

We have our key functionalies in place and we are now ready to add them to the frontend such as the Latest item page, which I built and took I even took inspiration from ASOS's search and filter functions. The search form was pretty straightforward to code as Id done this in a lot of previous workshops on the course so it was second nature to me by now. However, the filter function was pretty difficult to build and I kept revisiting it over a space of 3 days although, similarly to the search function we had done a lot of workshops on how to build a single filter component. This one was different as I had to link all four together but however, doing some research and speaking with one of the instructors, I was able to get there in the end. 

As the days went by Katie and I faced a lot of obstacles but pair coding, even though not working on the same components at the same time, we were able to help one another and pull through unscathed which I really liked. I am now feeling like a real Developer. This is our first real project where we have been let loose without any restrictions, so we are able to use any packages we wanted, which we did and we once again helped eachother to better understand how they worked when needed, just to have fresh eyes go over them especially as we were sometimes doing 12 to 14 hour days.

The guys on the backend spent the fourth day of the project building out some nice to haves for our app such as the messaging function which was fun because I built the frontend for this and it really put my CRUD knowledge to the test but I had no major issues here with it. One of the guys was now able join us on the frontend meaning we now have three brains cracking on with the frontend and the other got on with styling the components we had built in order to avoid simply relying on bulma to complete our styles. 

Having three people on the frontend means that we are able to work even quicker to completion, even though speed is not our main focus. We kept things BAU, our functionalities were looking real good and working as expected. Team morale was really high but we kept pushing eachother to get things done and offering a helping hand when it was needed. 

All is good until the day before last as the styling hadn’t been where we expected it to be and we stuill had a few bits we needed to add. All was plain sailing until this point and we hadnt had any disagreements till now. However even though we disagreed with how they styling should be done and why it hadnt been up to the standard it needed to be, we handled the situation like adults and this even showed in our presentation as we were humorous about it. We pulled through as a team to help out with the styling and I kept on with the functionalities over the last 24 hours as the team felt this was my strongest point. I made sure I didnt disappoint.

## CODE OF THE WEEK
* The code I was most proud of  


// * Function to allow user to filter clothing items
  handleFilter = (e, field) => {
    this.setState({ [field]: e.value }, this.getFilteredItems)
  }
  getFilteredItems = () => {
    const {
      category,
      color,
      gender,
      size,
      clothes,
    } = this.state
    const resultOfFilteredItemsToDisplay = clothes.filter((item) => {
      if (!category && !color && !gender && !size) {
        return true
      }
      const categoryFilter = category ? item.category.includes(category) : true
      const colorFilter = color ? item.color.includes(color) : true
      const genderFilter = gender ? item.genderCategory.includes(gender) : true
      const sizeFilter = size ? item.size.includes(size) : true
      return categoryFilter && colorFilter && genderFilter && sizeFilter
    })
    this.setState({ filteredItemsToDisplay: resultOfFilteredItemsToDisplay })
  }
  ```
  // * Function to change each filter
  filterChange = (event) => {
    const { filteredClothes } = this.state
    const showFilter = event.value
    if (filteredClothes.length > 0) {
      const filteredCats = filteredClothes.filter((cloth) => {
        const regex = RegExp(showFilter, "i")
        return (
          cloth.category.match(regex) ||
          cloth.color[0].match(regex) ||
          cloth.genderCategory.match(regex) ||
          cloth.size.match(regex)
        )
      })
      this.setState({ filteredClothes: filteredCats })
      console.log(event.value)
    } else {
      return "unavailable"
    }
  }
  ```
  
  We had done a lot of workshops in class around creating search and filter functions. However, I just hadn’t  come across how to make multiple filter bars work simultaneously. I did some research online where I came across some helpful tips and I did stumble many times but will some help from the teaching assistant, i was able to get there in the end.

## KEY LEARNINGS -

This particular week has been the highlight of my time on the course. I enjoyed working in a team very much, we were helpful, understanding and collaborative. Each member played a key role, whilst playing to their strengths which was amazing. I also had a lot of fun working with my coleagues whilst learning an awful lot about how different people work and things they may have worked on but I hadnt before. 

Loved the project and the final outcome
