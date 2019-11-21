import { VantComponent } from '../common/component';
VantComponent({
    classes: [
        'bar-class',
        'price-class',
        'button-class'
    ],
    props: {
        tip: {
            type: null,
            observer: 'updateTip'
        },
        tipIcon: String,
        type: Number,
        price: {
            type: null,
            observer: 'updatePrice'
        },
        label: String,
        loading: Boolean,
        disabled: Boolean,
        buttonText: String,
        currency: {
            type: String,
            value: '¥'
        },
        buttonType: {
            type: String,
            value: 'danger'
        },
        decimalLength: {
            type: Number,
            value: 2,
            observer: 'updatePrice'
        },
        suffixLabel: String,
        safeAreaInsetBottom: {
            type: Boolean,
            value: true
        },
        tanyi: { // 単位（たんい）
            type: String,
            value: "张"
        }
    },
    methods: {
        updatePrice() {
            const { price, decimalLength } = this.data;
            this.setData({
                hasPrice: typeof price !== 'undefined',
                // priceStr: (price / 100).toFixed(decimalLength)
            });
        },
        updateTip() {
            this.setData({ hasTip: typeof this.data.tip === 'string' });
        },
        onSubmit(event) {
            this.$emit('submit', event.detail);
        }
    }
});
