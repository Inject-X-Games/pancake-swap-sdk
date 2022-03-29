//import JSBI from 'jsbi'
import {
    ChainId,
    /*ETHER,
    CurrencyAmount,
    Pair,
    Percent,
    Route,
    Token,
    TokenAmount,
    Trade,
    TradeType,
    WETH*/
} from '../src'

describe('Trade CMC', () => {
    const token0 = new Token(ChainId.MAINNET, '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', 18, 't0')//BNB
    const token1 = new Token(ChainId.MAINNET, '0xd4EBABd6E70Bf0a16e8cCDBc6b00fE7817390f47', 18, 't1')//MPX

    const pair_0_1 = new Pair(new TokenAmount(token0, JSBI.BigInt(1000)), new TokenAmount(token1, JSBI.BigInt(1000)))
})
