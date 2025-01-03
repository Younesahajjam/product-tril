/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CartDto } from '../../models/cart-dto';

export interface GetCart$Params {
  cartId: number;
}

export function getCart(http: HttpClient, rootUrl: string, params: GetCart$Params, context?: HttpContext): Observable<StrictHttpResponse<CartDto>> {
  const rb = new RequestBuilder(rootUrl, getCart.PATH, 'get');
  if (params) {
    rb.path('cartId', params.cartId, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CartDto>;
    })
  );
}

getCart.PATH = '/api/v1/cart/{cartId}';
