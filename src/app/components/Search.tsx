'use client'

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 200);
    return (
        <div className="form-control w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <input
                type="text"
                placeholder="Search"
                className="input input-bordered bg-base-300 w-full focus:outline-none"
                onChange={(e) => handleSearch(e.target.value)}
            />

        </div>
    )
}
