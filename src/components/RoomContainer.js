import React from 'react'

import RoomsFilter from './RoomFilter'

import RoomsList from './RoomList'

import {withRoomConsumer} from '../context';

import Loading from  './Loading';

function RoomContainer({context})
{

    const {loading,sortedRooms,rooms}=context;

    if(loading)
    {
        return <Loading></Loading>;
    }

    return(

        <div>         
           <RoomsFilter rooms={rooms}></RoomsFilter> 
           <RoomsList rooms={sortedRooms}></RoomsList>
        </div>

    );
}

export default withRoomConsumer(RoomContainer)


/*
import React from 'react'

import RoomsFilter from './RoomFilter'

import RoomList from './RoomList'

import {RoomConsumer} from '../context';

import Loading from  './Loading';


export default function RoomContainer() {

    return (

        <RoomConsumer>

            {

                (value) => {

    const{loading,sortedRooms,rooms}=value;

    if(loading)
    {
        return <Loading></Loading>
    }
                    return (
            <div>
         Hello from Rooms Container   

            <RoomsFilter rooms={rooms}/>
             <RoomList rooms={sortedRooms}>

             </RoomList>
        </div>
                    );
                }
            }
        </RoomConsumer>


        
    );
}

*/