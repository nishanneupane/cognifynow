import { Spinner } from '@/components/ui/spinner'
import React from 'react'

const Loading = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <Spinner variant='bars' />
        </div>
    )
}

export default Loading