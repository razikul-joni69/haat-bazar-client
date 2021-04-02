import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setIMageURL] = useState(null);

    const onSubmit = (data) => {
        const eventData = {
            name: data.name,
            price: data.price,
            weight: data.weight,
            imageURL: imageURL,
        };
        const url = `https://afternoon-basin-49374.herokuapp.com/addEvent`;

        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(eventData),
        }).then((res) => console.log("server side response", res));
    };

    const handleImageUpload = (event) => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set("key", "21b1ab41011f8fb9349069c6df59f07a");
        imageData.append("image", event.target.files[0]);

        axios
            .post("https://api.imgbb.com/1/upload", imageData)
            .then(function (response) {
                setIMageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <div>
            <div className="">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control
                            name="name"
                            type="text"
                            placeholder="Enter product name"
                            ref={register}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            name="price"
                            type="text"
                            placeholder="Enter product price"
                            ref={register}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Weight</Form.Label>
                        <Form.Control
                            name="weight"
                            type="text"
                            placeholder="Enter product weight"
                            ref={register}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Confirm Upload" />
                    </Form.Group>
                    <Form.Group>
                        <Form.File
                            onChange={handleImageUpload}
                            id="exampleFormControlFile1"
                            label="Select product image"
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add Product
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
