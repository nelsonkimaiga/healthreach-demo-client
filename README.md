This is a simple web-app that hnadles the use-cases below:

- Patient Registration: Captures details and redirects to a visits page.
- Visits: Records vitals (height, weight, auto-calculated BMI) and displays clinical sections (Section A for BMI ≤ 25, Section B for BMI > 25).
- Patient Listing: Filters patients by date with BMI status (Underweight < 18.5, Normal 18.5-25, Overweight ≥ 25), supporting clinical decision-making.

Stack used:
- ReactJs

Deployment:
- Vercel - https://healthreach-demo-client.vercel.app/

- Clone the `[healthreach-demo-client](https://github.com/nelsonkimaiga/healthreach-demo-client)` folder on your terminal
- run `npm install` from root of the folder
- run `npm start` and the application will run on port `3000` in your browser i.e: `http://localhost:3000/`
- From the homepage you will 2 links namely: `New Patient Registration` which is linked to `http://localhost:3000/register` and `Existing Patient Visit` which is linked to `http://localhost:3000/patient-visit`
- Once a patient's visit information is filled, the patient report can be viewed from `http://localhost:3000/report?patientNumber=INC134121` Where `INC134121` is the `patientNumber`
