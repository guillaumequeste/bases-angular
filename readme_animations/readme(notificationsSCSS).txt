@import "../../../variables.scss";
.line_notif {
    position: fixed;
    margin-top: calc(#{$margin-top-notif1} - (#{$height_notif1} / 2) + (#{$height_notif} / 2));
    width: $margin_left_notif1;
    height: calc(#{$height_notif1} / 2);
    border-bottom: solid 2px #39c4d8;
    z-index: 3000;
}


/* notif1 */

.notif {
    position: fixed;
    width: 500px;
    height: $height_notif1;
    margin-top: calc(#{$margin-top-notif1} - (#{$height_notif1} / 2) + (#{$height_notif} / 2));
    margin-left: $margin_left_notif1;
    background-color: #ffffff;
    box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    z-index: 10000000;
    display: flex;
    flex-direction: row;
    .message_notif {
        width: 90%;
        height: 100%;
        padding: 0;
        text-align: center;
        display: flex;
        flex-direction: column;
        .texte_notif {
            width: 100%;
            height: 70%;
            display: flex;
            p {
                margin: auto;
                font-family: Poppins, sans-serif;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
            }
        }
        .icones {
            width: 100%;
            height: 30%;
            background-color: #39c4d8;
            display: flex;
            flex-direction: row;
            .icone {
                width: 20%;
                height: 100%;
                display: flex;
                .icon {
                    margin: auto;
                }
                .fa-lg {
                    color: white;
                }
            }
        }
    }
    .chevron {
        width: 10%;
        height: 100%;
        border-left: solid 1px #cec9c9;
        display: flex;
        .img_chevron {
            margin: auto;
            width: 13.5px;
            height: 24px;
            transform: rotate(180deg);
        }
        &:hover {
            cursor: pointer;
        }
    }
}

@media screen and (max-width: 767px) {
    .notif {
        display: none;
    }
}


/* notif2 */

.line_notif2 {
    margin-top: calc(#{$margin-top-notif2} - (#{$height_notif2} / 2) + (#{$height_notif} / 2));
    width: $margin_left_notif2;
    height: calc(#{$height_notif2} / 2);
}

.notif2 {
    width: 570px;
    height: $height_notif2;
    margin-top: calc(#{$margin-top-notif2} - (#{$height_notif2} / 2) + (#{$height_notif} / 2));
    margin-left: $margin_left_notif2;
    .left {
        display: flex;
        flex-direction: column;
        width: 92.4%;
        .message_notif {
            height: 65%;
            padding: 1% 0 0 7%;
            text-align: center;
            padding-bottom: 0;
        }
        .zoom {
            height: 35%;
            background-color: #ffffff;
            display: flex;
            .zooms {
                margin: auto;
                display: flex;
                p {
                    font-family: Poppins, sans-serif;
                    font-weight: 700;
                    font-size: 16px;
                    color: #e01a22;
                    margin-right: 24px;
                    &:hover {
                        cursor: pointer;
                    }
                }
            }
        }
    }
    .chevron2 {
        width: 7.6%;
        height: 100%;
    }
}


/* notif3 */

.line_notif3 {
    margin-top: calc(#{$margin-top-notif3} - (#{$height_notif3} / 2) + (#{$height_notif} / 2));
    width: $margin_left_notif3;
    height: calc(#{$height_notif3} / 2);
}

.notif3 {
    width: 500px;
    height: $height_notif3;
    margin-top: calc(#{$margin-top-notif3} - (#{$height_notif3} / 2) + (#{$height_notif} / 2));
    margin-left: $margin_left_notif3;
    .left {
        display: flex;
        flex-direction: column;
        width: 90%;
        .message_notif {
            height: 70%;
            padding: 1% 0 0 10%;
            text-align: center;
            padding-bottom: 0;
        }
        .zoom {
            height: 30%;
            background-color: #ffffff;
            display: flex;
            .zooms {
                margin: auto;
                padding-left: 5%;
                display: flex;
                div {
                    font-family: Poppins, sans-serif;
                    font-weight: 700;
                    font-size: 16px;
                    color: #e01a22;
                    margin-right: 10px;
                    img {
                        width: 21px;
                        height: 24px;
                    }
                    &:hover {
                        cursor: pointer;
                    }
                }
            }
        }
    }
    .chevron3 {
        width: 10%;
        height: 100%;
    }
}


/*.notifs {
    position: fixed;
    z-index: 100;
    left: 50px;
    top: 300px;
    .notif {
        background: white;
        box-shadow: $shadow;
        width: 340px;
        border-radius: 15px;
        border: 1px solid $border_grey;
        padding: 20px;
        text-align: center;
        p {
            margin-bottom: 20px;
            text-align: left;
        }
    }
}

.notif+.notif {
    margin-top: 20px;
}

.btn {
    border-radius: 7px;
    display: inline-block;
    padding: 12px 24px;
    border-style: solid;
    border-width: 2px;
    border-color: $primary_color;
    font-size: 16px;
    line-height: 19px;
    box-sizing: border-box;
    margin: 0 7.5px;
    cursor: pointer;
    &.btn-info {
        color: $primary_color;
        opacity: 0.8;
        &:hover {
            opacity: 1;
        }
    }
    &.btn-cta {
        color: white;
        background: $primary_color;
        &:hover {
            opacity: 0.9;
        }
    }
} */


/* disposition des chevrons */

.notif_chevron {
    position: fixed;
    margin-top: $margin-top-notif1;
    width: 40px;
    height: 48px;
    background-color: #ffffff;
    border: 1px solid #ffffff;
    z-index: 200;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    border: 1px solid #ffffff;
    box-shadow: 0 3px 6px 2px rgba(0, 0, 0, 0.1);
    img {
        margin-top: 12px;
        margin-left: 10px;
        width: 13.5px;
        height: 24px;
    }
    &:hover {
        cursor: pointer;
    }
}

@media screen and (max-width: 767px) {
    .notif_chevron {
        display: none;
    }
}

.display {
    display: block;
}

.none {
    display: none;
}

.chevron2 {
    margin-top: $margin-top-notif2;
}

.chevron3 {
    margin-top: $margin-top-notif3;
}

@media screen and (max-width: 767px) {
    .notif_chevron {
        display: none;
    }
}

@media screen and (min-width: 768px) and (max-width: 1000px) {
    .line_notif {
        margin-top: calc(17% - (#{$height_notif1} / 2) + (#{$height_notif} / 2));
    }
    .notif {
        margin-top: calc(17% - (#{$height_notif1} / 2) + (#{$height_notif} / 2));
    }
    .notif_chevron {
        margin-top: 17%;
    }
}

@media screen and (min-width: 768px) and (max-width: 1000px) {
    .line_notif2 {
        margin-top: calc(38% - (#{$height_notif2} / 2) + (#{$height_notif} / 2));
    }
    .notif2 {
        margin-top: calc(38% - (#{$height_notif2} / 2) + (#{$height_notif} / 2));
    }
    .chevron2 {
        margin-top: 38%;
    }
}

@media screen and (min-width: 768px) and (max-width: 1000px) {
    .line_notif3 {
        margin-top: calc(62% - (#{$height_notif3} / 2) + (#{$height_notif} / 2));
    }
    .notif3 {
        margin-top: calc(62% - (#{$height_notif3} / 2) + (#{$height_notif} / 2));
    }
    .chevron3 {
        margin-top: 62%;
    }
}

@media screen and (min-width: 1001px) and (max-width: 1024px) {
    .line_notif {
        margin-top: calc(14% - (#{$height_notif1} / 2) + (#{$height_notif} / 2));
    }
    .notif {
        margin-top: calc(14% - (#{$height_notif1} / 2) + (#{$height_notif} / 2));
    }
    .notif_chevron {
        margin-top: 14%;
    }
}

@media screen and (min-width: 1001px) and (max-width: 1024px) {
    .line_notif2 {
        margin-top: calc(30% - (#{$height_notif2} / 2) + (#{$height_notif} / 2));
    }
    .notif2 {
        margin-top: calc(30% - (#{$height_notif2} / 2) + (#{$height_notif} / 2));
    }
    .chevron2 {
        margin-top: 30%;
    }
}

@media screen and (min-width: 1001px) and (max-width: 1024px) {
    .line_notif3 {
        margin-top: calc(48% - (#{$height_notif3} / 2) + (#{$height_notif} / 2));
    }
    .notif3 {
        margin-top: calc(48% - (#{$height_notif3} / 2) + (#{$height_notif} / 2));
    }
    .chevron3 {
        margin-top: 48%;
    }
}


/* les lignes n'apparaissent pas en version mobile */

@media screen and (max-width: 767px) {
    .line_notif {
        display: none;
    }
}

@media screen and (max-width: 767px) {
    .line_notif2 {
        display: none;
    }
}

@media screen and (max-width: 767px) {
    .line_notif3 {
        display: none;
    }
}