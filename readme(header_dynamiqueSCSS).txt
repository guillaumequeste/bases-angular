@import "./../variables.scss";
.grids {
    margin-top: $navbar_height + 1;
    .zooms {
        position: fixed;
        z-index: 100;
        bottom: 35px;
        left: 35px;
        .zoom_in {
            border-radius: 50%;
            width: 50px;
            height: 50px;
            display: flex;
            box-shadow: 0 0 15px rgb(211, 206, 206);
            margin-bottom: 15px;
            .img_zoom_in {
                margin: auto;
                transform: scale(2);
            }
            &:hover {
                cursor: pointer;
            }
        }
        .zoom_out {
            border-radius: 50%;
            width: 50px;
            height: 50px;
            display: flex;
            box-shadow: 0 0 10px rgb(211, 206, 206);
            .img_zoom_out {
                margin: auto;
                transform: scale(2);
            }
            &:hover {
                cursor: pointer;
            }
        }
    }
    @media screen and (max-width: 1024px) {
        .zooms {
            display: none;
        }
    }
}

@media screen and (max-width: 767px) {
    .grids {
        margin-top: $navbar_height_mobile + 1;
    }
}


/* apparition du titre */

.pages {
    &.hidden {
        display: none;
    }
}