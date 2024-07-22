'use client'

import { useEffect, useRef, useState } from 'react';
import Image                           from 'next/image';
import styles                          from './styles/image-picker.module.css';

interface ImagePickerProps {

    label?: string,
    name?: string,
}

export default function ImagePicker({ label, name }: ImagePickerProps) {


    const [pickedImage, setPickedImage] = useState<string | null>(null),
        imageInput = useRef<HTMLInputElement>(null);

    function handlePickClick() {

        imageInput.current?.click();
    }

    useEffect(() => {
        return () => {
            if (pickedImage) {
                URL.revokeObjectURL(pickedImage)
            }
        }
    }, [pickedImage])

    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {

        const files = e?.target.files

        if (files && files.length > 0) {

            const file      = files[0],
                  imageUrl  = URL.createObjectURL(file);
            
                  setPickedImage(imageUrl)

            return files;

        } else if ( !files ) {

            setPickedImage(null);

            return
        }


    }



    return (

        <div className={styles.picker}>

            <label htmlFor={name}>{label}</label>
            <div className={styles.controls}>
                <div className={styles.preview}>
                    {!pickedImage && <p>No image piced yet.</p>}
                    {pickedImage && <Image src={pickedImage} alt='Image selected by the user' fill />}
                </div>
                <input
                    className={styles.input}
                    type='file'
                    id='image'
                    accept='image/png, image/jpeg, image/jpg'
                    name={name}
                    ref={imageInput}
                    onChange={handleImageChange}
                    required
                />
            </div>
            <button className={styles.button} type='button' onClick={handlePickClick}>Pick an Image</button>

        </div>
    )
}