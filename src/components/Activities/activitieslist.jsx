import React from 'react'
import Activities from './activities'
import { actData } from './activitiesdata'

function ActivitiesList() {
    return (
        <div className=''>
            <div class="relative overflow-x-auto rounded-[10px]">
                <table class="w-full text-sm text-left border">
                    <thead class="text-xs text-gray-700 uppercase rounded-[10px]">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Item
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Activity
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                By
                            </th>
                            <th scope="col" class="px-6 py-3">
                                To
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                            {actData.map((activity) => (
                                <Activities activity={activity} key={activity.id} />
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ActivitiesList