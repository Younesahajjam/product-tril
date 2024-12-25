/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FavotiteDto } from '../../models/favotite-dto';

export interface AddItemToFavorite$Params {
  customerId: number;
  itemId: number;
}

export function addItemToFavorite(http: HttpClient, rootUrl: string, params: AddItemToFavorite$Params, context?: HttpContext): Observable<StrictHttpResponse<FavotiteDto>> {
  const rb = new RequestBuilder(rootUrl, addItemToFavorite.PATH, 'post');
  if (params) {
    rb.path('customerId', params.customerId, {});
    rb.path('itemId', params.itemId, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<FavotiteDto>;
    })
  );
}

addItemToFavorite.PATH = '/v1/api/favorites/add/{customerId}/{itemId}';