import React from 'react';
import {usePhotos} from '../hooks';


const Photos = () => {
    const {data, isFetching} = usePhotos();
    return (
        <div>
            <ul>
                {data?.pages.map((page: any) =>
                    page?.data.map((photo: any) => (
                        <li key={photo.id}>
                            <img src={photo.download_url} alt=""/>
                        </li>
                    ))
                )}
            </ul>
            {
                isFetching && <div className="loading">
                    <div className="lds-ring">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Photos;
