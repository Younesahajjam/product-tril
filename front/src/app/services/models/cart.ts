/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { Costumer } from '../models/costumer';
import { Item } from '../models/item';
export interface Cart {
  costumer?: Costumer;
  items?: Array<Item>;
  oid?: number;
  status?: string;
}
