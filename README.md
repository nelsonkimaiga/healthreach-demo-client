This is a simple web-app that will register a patient, manage new and subsequent visits for the patient and captures their health-related vitals.

Stack used:
- ReactJs

- Clone the `[healthreach-demo-client](https://github.com/nelsonkimaiga/healthreach-demo-client)` folder on your terminal
- run `npm install` from root of the folder
- run `npm run dev` and the application will run on port `3000` in your browser i.e: `http://localhost:3000/`
- From the homepage you will 2 links namely: `New Patient Registration` which is linked to `http://localhost:3000/register` and `Existing Patient Visit` which is linked to `http://localhost:3000/patient-visit`
- Once a patient's visit information is filled, the patient report can be viewed from `http://localhost:3000/report?patientNumber=INC134121` Where `INC134121` is the `patientNumber`
