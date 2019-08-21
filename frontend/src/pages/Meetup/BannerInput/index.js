import React, { useState, useRef, useEffect } from 'react';
import { MdPhotoCamera } from 'react-icons/md';
import { useField } from '@rocketseat/unform';
import api from '~/services/api';
import { Container, ImageWrapper } from './styles';

export default function BannerInput() {
    const { defaultValue, registerField } = useField('banner');

    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const ref = useRef();

    useEffect(() => {
        if (ref.current) {
            registerField({
                name: 'banner',
                ref: ref.current,
                path: 'dataset.file',
            });
        }
    }, [ref, registerField]);

    async function handleChange(e) {
        const data = new FormData();

        data.append('file', e.target.files[0]);

        const response = await api.post('files', data);
        const { id, url } = response.data;
        setFile(id);
        setPreview(url);
    }
    if (!defaultValue) {
        return null;
    }
    return (
        <Container>
            <label htmlFor="banner">
                <ImageWrapper>
                    <img src={preview || ''} alt="" />
                    {preview ? '' : <MdPhotoCamera size={64} />}
                </ImageWrapper>

                <input
                    type="file"
                    id="banner"
                    accept="image/*"
                    data-file={file}
                    ref={ref}
                    onChange={handleChange}
                />
            </label>
        </Container>
    );
}
