@import "./../../../variables.scss";
$margin: 30px;
$zoom: 50;
$cart_width: 240px;
:host {
    --cart-width: 240px;
    --resize: 60px;
    --ticket-color: #db2836;
    --ticker-color-light: #e2545f;
    --ticket-color-darker: #b21e29;
    .fast-cart {
        width: var(--cart-width);
        position: fixed;
        top: 0;
        border-left: 1px solid $border_grey;
        box-shadow: $shadow;
        right: 0;
        z-index: 150;
        app-tile {
            height: calc(var(--cart-width) - var(--resize));
            width: calc(var(--cart-width) - var(--resize));
        }
        app-tile+app-tile {
            margin-top: $margin;
        }
        /* languette du carousel */
        .edge {
            display: flex;
            justify-content: center;
            align-items: center;
            $width: 80px;
            position: absolute;
            left: -$width;
            border-top-left-radius: 30px;
            border-bottom-left-radius: 30px;
            background: white;
            width: $width;
            height: 64px;
            border-right: none;
            top: 135px;
            box-shadow: -9px 3px 6px 2px rgba(0, 0, 0, 0.1);
            z-index: 20000;
            button {
                border: none;
                background: none;
                color: $secondary_color;
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                span {
                    position: absolute;
                    top: -1px;
                    left: 0;
                    color: white;
                    width: 45px;
                    line-height: 45px;
                }
            }
        }
        /* petit panier */
        .container {
            position: relative;
            padding: ($navbar_height + $margin / 3) $margin $margin $margin;
            height: 100vh;
            background: white;
            z-index: 160;
            text-align: center;
            overflow-y: auto;
            box-shadow: -5px 0px 16px rgba(0, 0, 0, 0.1);
            margin-right: 3px;
            display: flex;
            flex-direction: column;
            .liste {
                h5 {
                    font-family: Poppins, sans-serif;
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 24px;
                    color: #e01422;
                    text-transform: uppercase;
                }
                hr {
                    margin: auto;
                    margin-top: $margin / 3;
                    margin-bottom: $margin;
                    background-color: #cec9c9;
                    width: 90%;
                    text-align: center;
                    height: 1px;
                }
            }
            .content {
                padding-bottom: 50%;
                display: flex;
                flex-direction: column;
                align-items: center;
                flex: 1;
                .thumb-tiles {
                    margin: 1em;
                    position: relative;
                    &:hover {
                        cursor: pointer;
                    }
                }
            }
            .ouvrir {
                position: fixed;
                bottom: 0;
                width: $cart_width;
                background-color: white;
                z-index: 40000;
                button {
                    position: relative;
                    bottom: 24px;
                    background-color: #db2836;
                    width: 160px;
                    height: 42px;
                    border: 1px solid rgba(0, 0, 0, 0.2);
                    box-sizing: border-box;
                    border-radius: 4px;
                    color: white;
                    font-family: Poppins, sans-serif;
                    font-weight: bold;
                    font-size: 16px;
                    margin: 50px 0 0 -63px;
                    &:hover {
                        cursor: pointer;
                    }
                }
            }
        }
    }
    @media screen and (max-width: 767px) {
        .fast-cart {
            display: none;
        }
    }
}


/* fermer petit panier version mobile */

.closedCart {
    position: fixed;
    z-index: 300;
    top: 0;
    width: 100vw;
    height: 63px;
    background-color: white;
    .btn-close {
        background-color: unset;
        border: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        flex-wrap: nowrap;
        color: #505050;
        font-size: 14px;
        white-space: nowrap;
        img {
            margin: 0 .5em;
        }
        .fa-3x {
            color: #505050;
        }
    }
}

.none {
    display: none;
}

.display {
    display: block;
}


/* petit panier version mobile */

.cart {
    display: none;
}

@media screen and (max-width: 767px) {
    .cart {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 88px;
        display: flex;
        box-shadow: 0px 1px 18px rgba(0, 0, 0, 0.2);
        background-color: white;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        z-index: 50000;
        .div_cart {
            margin: auto;
            button {
                width: 54px;
                height: 63px;
                border: none;
                background: none;
                color: $secondary_color;
                margin: 0;
                position: relative;
                display: flex;
                span {
                    position: absolute;
                    top: 5px;
                    left: 10px;
                    color: white;
                    width: 45px;
                    line-height: 45px;
                    font-family: Poppins, sans-serif;
                    font-weight: 700;
                    font-size: 16px;
                }
            }
        }
        .containerMobile {
            position: absolute;
            z-index: 1;
            margin-top: 88px;
            height: calc(100vh - 88px);
            width: 100vw;
            background-color: white;
            text-align: center;
            overflow-y: auto;
            padding: 2%;
            h5 {
                font-family: Poppins, sans-serif;
                font-weight: 700;
                font-size: 16px;
                line-height: 24px;
                color: #e01422;
                text-transform: uppercase;
            }
            hr {
                margin: auto;
                margin-top: $margin / 3;
                margin-bottom: $margin;
                background-color: #cec9c9;
                width: 15%;
                text-align: center;
                height: 1px;
            }
            .cartMobile {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
                app-tile {
                    margin: 1% 0;
                }
            }
        }
    }
}


/* zone qui permet l'ouverture du petit panier */

@media screen and (min-width: 1025px) {
    .mouseOver {
        $width: 75px;
        position: absolute;
        left: -$width + 50;
        width: $width;
        height: 100%;
        top: 0;
        z-index: 20000;
    }
}


/* ascenseur */

.container::-webkit-scrollbar-thumb {
    background-color: #C0ECF3;
    border-radius: 5px;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, .2);
}
