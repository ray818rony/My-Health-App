import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseability, chooseName } from '../../redux/slices/rootSlice';
import { input } from '../SharedComponents/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';

import { useGetData } from '../CustomHooks';


interface UserFormProps {
    id?: string;
    data?: {}
}

interface UserState {
    name: string;
    Availability: string;
}

export const UserForm = (props: UserFormProps) => {

    const dispatch = useDispatch();
    let { getData } = useGetData();
    const store = useStore()
    const name = useSelector<UserState>((state: { name: any; }) => state.name)
    const { register, handleSubmit } = useForm({})

    const onSubmit = (data: any, event: any) => {
        console.log(props.id)
        console.log(props)
        if (props.id!) {
            server_calls.update(props.id!, data)
            console.log(`Updated:${data} ${props.id}`)
            window.location.reload()
            event.target.reset();
        } else {
            dispatch(chooseName(data.name))
            console.log(store.getState())
            // those 2 are in redux slice root slice
            dispatch(chooseability(data.ability))
            // dispatch(chooseDescribtion(data.description))
            server_calls.create(store.getState())
            console.log(data.ability)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Full time or Part time</label>
                  <br />
                    <input {...register('name')} name="name" placeholder='Pt or Ft' />
                </div>
                <br />
                <div>
                    <label htmlFor="Issues">Main Concern</label>
                    <input {...register('ability')} name="ability" placeholder="Issues" />
                </div>
                <br />
                <div>
                    <label htmlFor="flight_time">requirments</label>
                    <input {...register('flight_time')} name="flight_time" placeholder="requirments" />
                </div>
                <br />
                <div>
                    <label htmlFor="description">Medications</label>
                    <input {...register('description')} name="description" placeholder="Medications" />
                </div>
                <br />
                <div>
                    <label htmlFor="Origin">Exercises</label>
                    <input {...register('Origin')} name="Origin" placeholder="Exercises" />
                </div>
                <br />
                <div>
                   
                    <br />
                    <br />
                    <Button type='submit'>Submit</Button>
                </div>
            </form>
        </div>
    )}

function chooseDescribtion(description: any): any {
    throw new Error('Function not implemented.');
}
