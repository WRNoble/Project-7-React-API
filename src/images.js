import React from 'react';

let url = "https://public.opendatasoft.com/explore/embed/dataset/roman-emperors/images/?sort=index";


fetch(url) {
    .then(res => res.json())
    .then(
        (result) => {
            this.setState({
                isLoaded: true,
                images: result.images
            });
        },
        (error) => {
            this.setState({
                isLoaded: true,
                error
            });
        }
    )
}