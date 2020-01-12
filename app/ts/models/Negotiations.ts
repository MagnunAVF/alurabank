import { Negotiation } from './Negotiation';

export class Negotiations {
    private _negotiations: Negotiation[] = [];

    add(negotiation: Negotiation): void {
        this._negotiations.push(negotiation);
    }

    toArray(): Negotiation[] {
        // return a copy of this array (security)
        return [].concat(this._negotiations);
    }
}