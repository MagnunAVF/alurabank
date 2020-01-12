class NegotiationController {
    private _inputDate: JQuery;
    private _inputQuantity: JQuery;
    private _inputValue: JQuery;
    private _negotiations = new Negotiations();
    private _negotiationsView = new Views.NegotiationsView('#negotiationsView');
    private _messageView = new Views.MessageView('#messageView');

    constructor() {
        this._inputDate = $('#data');
        this._inputQuantity = $('#quantidade');
        this._inputValue = $('#valor');
        this._negotiationsView.update(this._negotiations);
    }

    add(event: Event) {
        event.preventDefault();

        const negotiation = new Negotiation(
            new Date(this._inputDate.val().replace(/-/g, ',')),
            parseInt(this._inputQuantity.val()),
            parseFloat(this._inputValue.val())
        );

        this._negotiations.add(negotiation);
        this._negotiationsView.update(this._negotiations);
        this._messageView.update("Negociação adicionada com sucesso !");
    }
}