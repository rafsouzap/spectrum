import express from 'express';
import SpecialtiesController from './controllers/SpecialtiesController';
import ServiceTypesController from './controllers/ServiceTypesController';

const routes = express.Router();
const specialtiesController = new SpecialtiesController();
const serviceTypesController = new ServiceTypesController();

routes.get('/specialties', specialtiesController.index);
routes.get('/service-types', serviceTypesController.index);

export default routes;
