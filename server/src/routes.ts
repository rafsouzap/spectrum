import express from 'express';
import SpecialtiesController from './controllers/SpecialtiesController';
import ServiceTypesController from './controllers/ServiceTypesController';
import StatesController from './controllers/StatesController';

const routes = express.Router();
const specialtiesController = new SpecialtiesController();
const serviceTypesController = new ServiceTypesController();
const statesController = new StatesController();

routes.get('/specialties', specialtiesController.index);
routes.get('/service-types', serviceTypesController.index);
routes.get('/states', statesController.index);

export default routes;
