'use client';
import { Store } from "@/lib/store/store"

export default function PreviewPage() {
    const state = Store(state => state);
    console.log(state);

    return (
        <p>preview page {state.platformsValues.length}</p>
    )
}