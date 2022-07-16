# Assignment - 3

 For this assignment, I have developed backend for the Facility reservation management feature for which the frontend is done by me on assignment-1 and project proposal.

* *Date Created*: 14 JUL 2022
* *Last Modification Date*: 14 JUL 2022
* *Application URL*: <https://sportify-prd.herokuapp.com/>
* *Backend Application URL*: <https://sportify-backend-prd.herokuapp.com/>
* *Individual Backend Git URL*: <https://git.cs.dal.ca/kabtiyal/5709-g10-sportify-backend/-/tree/aravind-jayanthi>
* *Individual Frontend Git URL*: <https://git.cs.dal.ca/ajayanthi/5709-group10/-/tree/assignment-3-aj>
* *Group Backend Git URL*: <https://git.cs.dal.ca/kabtiyal/5709-g10-sportify-backend/-/tree/main>
* *Group Frontend Git URL*: <https://git.cs.dal.ca/ajayanthi/5709-group10/-/tree/main>

## Authors

* [Aravind Jayanthi](ar687531@dal.ca)


# Feature Developed
## Facility Reservation Management
This feature provides services to book facilities like gym equipment, swimming pool, badminton courts, basketball courts etc for the users for their workout or other activities. It also provides the option to cancel the future reservations and make the facility available for other uses. Admin can add new facilities to the club.
## Tasks
* **View reservations:** To view the reservations made by the user, the user has to login and click on the profile icon which shows my-reservations page on the dropdown. By clicking on the "My Reservations" button users can view their reservations.
* **View facilities:** User can view facilities by clicking on the "Facility" button on the App bar.
* **Reserve facility:** User must be logged in to reserve facilites. To book a facility go to facility page and choose the appropriate facility and filling the relevant details like date, timeslot, name etc.
* **Cancel future reservation:** By going to the "My Reservations" page and by clicking view details on the  appropriate reservation. 
**This option is only available for the active reservations with future date and time.**
* **Add New Facility:** **Only admin** (check Admin Credentials section for Email and password.) 
can add new facility by going to the "Facility" page and clicking on the "Add New Facility" button.
## Admin Credentails
* Email: sportify5709@gmail.com
* Password: asd@1234A

## User Credentials
* Email: aravindjayanthi28@gmail.com
* Password: Aravind@98

## Built With

* [NodeJS](https://nodejs.org/en/) - The language used to write the logic of the backend code.
* [Express](https://expressjs.com/) - The backend framework used to create APIs with proper routing, authentication and authorization.
* [Mongoose](https://mongoosejs.com/) - The Mongoose library is used to connect with MongoDB which is the database for our application. It also provides ORM capabilities to conver the results into JSON with appropriate properties.
* [uuid](https://www.npmjs.com/package/uuid) - This library is used to generate UUID values for the different models used in the project.

# Folder structure and Files Developed

## Backend folder structure
According to the Expressjs documentation layereing structure is most commonly used and suitable for webapplication developed using Express and Nodejs stack. The following layereing folder structure is used for the backend of this project: 
* **routes:** This layer defines the APIs path and structure like path variables etc. This is the start point of the API.
* **controllers:** This layer contains the business logic corresponding to the entities used in the project.
* **models:** This layer defines the schemas of the entites that are present in the MongoDB database. This layer is responsible for performing operations on the Database and converting responses into appropriate structure which can be used in the business logic.

## Frontend folder structure
The following folder structure is used for the frontend of this project:
* **assets:** This folder contains the static images required for the project's frontend like the home page icon.
* **components:** This folder contains the reusable components which can be used all over the UI like Loader, Header etc. If the component requires separate css a sub-folder is created which contains both the jsx/tsx code of the component and css file of the component.
* **data:** This folder contains the meta data required for the frontend along with the interfaces which enforces structure on the tsx/ts files.
* **pages:** This folder contains sub-folders, each sub-folder contains frontend code for each page. Each sub-folder contains jsx/tsx corresponding to the page and some folder have css files which has styling corresponding to the page. 
## Backend codebase
In the backend repository [git](https://git.cs.dal.ca/kabtiyal/5709-g10-sportify-backend/-/tree/aravind-jayanthi) the following files are developed by me:
* [routes/facilites.js](https://git.cs.dal.ca/kabtiyal/5709-g10-sportify-backend/-/blob/main/routes/facilities.js)
* [routes/reservations.js](https://git.cs.dal.ca/kabtiyal/5709-g10-sportify-backend/-/blob/main/routes/reservations.js)
* [models/facilites.js](https://git.cs.dal.ca/kabtiyal/5709-g10-sportify-backend/-/blob/main/models/facilities.js)
* [models/reservations.js](https://git.cs.dal.ca/kabtiyal/5709-g10-sportify-backend/-/blob/main/models/reservations.js)
* [controllers/facilites.js](https://git.cs.dal.ca/kabtiyal/5709-g10-sportify-backend/-/blob/main/controllers/facilities.js)
* [controllers/reservations.js](https://git.cs.dal.ca/kabtiyal/5709-g10-sportify-backend/-/blob/main/controllers/reservations.js)
* [.gitlab-ci.yml](https://git.cs.dal.ca/kabtiyal/5709-g10-sportify-backend/-/blob/main/.gitlab-ci.yml)
## Frontend codebase
In the frontend repository [git](https://git.cs.dal.ca/ajayanthi/5709-group10/-/tree/assignment-3-aj) the following files are developed by me:
* [src/pages/AddNewFacility](https://git.cs.dal.ca/ajayanthi/5709-group10/-/tree/main/src/pages/AddNewFacility)
* [src/pages/Facilities](https://git.cs.dal.ca/ajayanthi/5709-group10/-/tree/main/src/pages/Facilities)
* [src/pages/FacilityDetails](https://git.cs.dal.ca/ajayanthi/5709-group10/-/tree/main/src/pages/FacilityDetails)
* [src/pages/ReservationDetails](https://git.cs.dal.ca/ajayanthi/5709-group10/-/tree/main/src/pages/ReservationDetails)
* [src/pages/Reservations](https://git.cs.dal.ca/ajayanthi/5709-group10/-/tree/main/src/pages/Reservations)
* [src/pages/EventDetails](https://git.cs.dal.ca/ajayanthi/5709-group10/-/tree/main/src/pages/EventDetails)
* [src/pages/Events](https://git.cs.dal.ca/ajayanthi/5709-group10/-/tree/main/src/pages/Events)
* [src/components/Loader](https://git.cs.dal.ca/ajayanthi/5709-group10/-/tree/main/src/components/Loader)
* [src/components/NoReservations](https://git.cs.dal.ca/ajayanthi/5709-group10/-/tree/main/src/components/NoReservations)
* [src/EventItem.tsx](https://git.cs.dal.ca/ajayanthi/5709-group10/-/blob/main/src/components/EventItem.tsx)
* [src/FacilityItem.tsx](https://git.cs.dal.ca/ajayanthi/5709-group10/-/blob/main/src/components/FacilityItem.tsx)
* [src/data/AvailabilityData.tsx](https://git.cs.dal.ca/ajayanthi/5709-group10/-/blob/main/src/data/AvailabilityData.tsx)
* [src/data/AvailabilitySlots.tsx](https://git.cs.dal.ca/ajayanthi/5709-group10/-/blob/main/src/data/AvailaibilitySlots.tsx)
* [src/data/BookedSlot.ts](https://git.cs.dal.ca/ajayanthi/5709-group10/-/blob/main/src/data/BookedSlot.ts)
* [src/data/Event.ts](https://git.cs.dal.ca/ajayanthi/5709-group10/-/blob/main/src/data/Events.ts)
* [src/data/FacilitiesInterface.tsx](https://git.cs.dal.ca/ajayanthi/5709-group10/-/blob/main/src/data/FacilitiesInterfac.tsx)
* [src/data/MyEventInterface.ts](https://git.cs.dal.ca/ajayanthi/5709-group10/-/blob/main/src/data/MyEventInterface.ts)
* [src/data/MyEvents.ts](https://git.cs.dal.ca/ajayanthi/5709-group10/-/blob/main/src/data/MyEvents.ts)
* [src/data/ReservationInterface.tsx](https://git.cs.dal.ca/ajayanthi/5709-group10/-/blob/main/src/data/ReservationInterface.tsx)

## Integration Instructions

The facilities.js and reservations.js can be used for searching feature. Just by importing those files, MongoDB queries can be performed on the schemas available on those files.
The following line show how to import the functionality of facility model.
```
const Facilities = require("../models/facilities");
```

## Sources Used

* https://mongoosejs.com/docs/guide.html - This is referred to query mongoDB database from nodejs.
* https://expressjs.com/en/guide/routing.html  - This resource is referred to understand the routing layers of the expressjs framework. 

### models/facilities.js

*Lines 09 - 19*

```
const facilitiesSchema = new Schema({
    id: String,
    name: String,
    location: String,
    description: String,
    category: String,
    image: String
});

const Facilities = new model('Facilities', facilitiesSchema);
module.exports = Facilities;

```

The code above was created by adapting the code in [Mongoose Docs](https://mongoosejs.com/docs/guide.html) as shown below: 

```
const blogSchema = new Schema({
  title:  String, // String is shorthand for {type: String}
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});

const Blog = mongoose.model('Blog', blogSchema);

```

- The code in [Mongoose Docs](https://mongoosejs.com/docs/guide.html) was implemented to provide a generic example for writing models for mongoDB using Mongoose library
- [Mongoose Docs](https://mongoosejs.com/docs/guide.html)'s Code was referred because it is the offical docs of the Mongoose library
-  [Mongoose Docs](https://mongoosejs.com/docs/guide.html)'s Code was modified to only encorporate the model's used for this project.[Mongoose Docs](https://mongoosejs.com/docs/guide.html)


### models/reservations.js

*Lines 09 - 21*

```
const reservationSchema = new Schema({
    id: String,
    facility_id: String,
    from: Date,
    to: Date,
    booked_date: Date,
    reserved_by: String,
    reserved_for: String,
    status: "Active" | "Cancelled"
});

const Reservations = new model('Reservations', reservationSchema);
module.exports = Reservations;

```

The code above was created by adapting the code in [Mongoose Docs](https://mongoosejs.com/docs/guide.html) as shown below: 

```
const blogSchema = new Schema({
  title:  String, // String is shorthand for {type: String}
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});

const Blog = mongoose.model('Blog', blogSchema);

```

- The code in [Mongoose Docs](https://mongoosejs.com/docs/guide.html) was implemented to provide a generic example for writing models for mongoDB using Mongoose library
- [Mongoose Docs](https://mongoosejs.com/docs/guide.html)'s Code was referred because it is the offical docs of the Mongoose library
-  [Mongoose Docs](https://mongoosejs.com/docs/guide.html)'s Code was modified to only encorporate the model's used for this project.[Mongoose Docs](https://mongoosejs.com/docs/guide.html).
