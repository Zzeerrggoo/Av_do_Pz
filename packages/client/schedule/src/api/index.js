import axios from 'axios';
import config from '../app/config';
import ScheduleApi from './ScheduleApi';

const {
  api: {http},
} = config;

const client = axios.create(http);

export const schedule = new ScheduleApi({client});

export default client;