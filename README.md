# Getting Started
npm start serves you pretty well here :)

## How I addressed the specifications
* Sorting by alphabetical ascending and age descending (use sort functions and make custom comparators based on data)
* Display by alphabetical ascending by default (componentDidMount and set the initial state to sorted by alphabetical)
* Maintain the structure of components (moved data from datatable to app)

## Pain Points (and their solutions)
* Passing Data Between Sibling Components (move people into the parent component and pass it down as props!)
* Sorting data and showing it dynamically on frontend (pass callback function down to child that sets the object people and pass the sorted object onto that function)

## Additional Notes
* Right now, unclicking the checkbox doesn't really do anything; since the functionality wasn't specified, I just left the data still sorted even if unchecked.
