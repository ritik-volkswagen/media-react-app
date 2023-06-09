import React from 'react'
import { GoTrashcan } from 'react-icons/go';
import { useRemoveAlumMutation } from '../store';
import Button from './Button';
import ExpandablePanel from './ExpandablePanel';
import PhotosList from './PhotosList';

const AlbumsListItem = ({ album }) => {

    const [removeAlbum, results] = useRemoveAlumMutation();

    const handleRemoveAlbum = () => {
        removeAlbum(album);
    }

    const header = <>
        <Button className="mr-2" loading={results.isLoading} onClick={handleRemoveAlbum}>
            <GoTrashcan />
        </Button>
        {album.title}
    </>;


    return <ExpandablePanel key={album.id} header={header}>
        <PhotosList album={album} />
    </ExpandablePanel>
}

export default AlbumsListItem
