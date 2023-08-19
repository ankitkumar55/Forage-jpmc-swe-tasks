import { ServerRespond } from './DataStreamer';

export interface Row {
      top_ask_price: number,
      top_bid_price:number,
      timestamp: date,
      ratio: number
      lower_bound: number,
      upper_bound: number,
      trigger_alert: number | undefined,
}


export class DataManipulator {
  static generateRow(serverResponds: ServerRespond[]): Row {
    const priceABC= (serverResponds[0].top_ask_price+serverResponds[0].top_bid_price)/2;
    const priceDEF= (serverResponds[1].top_ask_price+serverResponds[1].top_bid_price)/2;
    ratio= priceABC/priceDEF;
    const upperBound: 1+0.05;
    const lowerBound: 1-0.05;
    return {

            price_abc: priceABC,
            price_def: priceDEF,
            ratio,
            timestamp: serverRespond[0].timestamp>serverRespond[1].timestamp?
              serverRespond[0].timestamp: serverRespond[1].timestamp,
            upper_bound: upperBound,
            lower_bound: lowerBound,
            trigger_alert: (ratio > upprBound || ratio < lowerBound)  ? ratio: undefined, 
    };
  }
}
