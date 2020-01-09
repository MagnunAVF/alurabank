class Negotiations {
    private _negotiations: Negotiation[] = [];

    add(negotiation: Negotiation): void {
        this._negotiations.push(negotiation);
    }

    toArray(): Negotiations[] {
        // return a copy of this array (security)
        return [].concat(this._negotiations);
    }
}