import React from 'react'
import { FaClock } from 'react-icons/fa'

function Activities({ activity }) {
    return (
        <tr class="border-b dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {activity.item}
            </th>
            <td class="px-6 py-4 flex gap-2 items-center">
                <div className='p-[5px_15px] bg-brand5 text-brand6 rounded-full'>
                    {activity.activity}
                </div>
                <div className='flex gap-2 items-center'>
                    <FaClock /> {activity.time}
                </div>
            </td>
            <td class="px-6 py-4">
                {activity.price}
            </td>
            <td class="px-6 py-4">
                {activity.to}
            </td>
            <td class="px-6 py-4">
                {activity.by}
            </td>
        </tr>
    )
}

export default Activities