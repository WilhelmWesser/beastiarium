import {Model} from 'objection'
import knexConfig from "../knexfile";
import {ENV} from "./common/enums/enums";
import Knex from "knex";

Model.knex(Knex(knexConfig[ENV.APP.NODE_ENV]))