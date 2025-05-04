import React, { Suspense } from 'react'
import Search from './Search'
import Loading from './Loading'

export default function Header() {
    return (
        <div className="navbar bg-base-200 shadow-lg">
            <div className="flex w-full justify-between gap-4">
                <a href="/" className="btn btn-ghost text-xl">PixGallery</a>
                <Suspense fallback={<Loading />}>
                    <Search />
                </Suspense>
            </div>
        </div>
    )
}
