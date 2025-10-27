import { db } from "@/app/db/indexedDB";
import { queryClient } from "./query";
// export async function initSync() {
//     const localTasks = await db.tasks.toArray();
//     if (localTasks.length) {
//         queryClient.setQueryData(['tasks'], localTasks);
//     }
//     try {
//         await queryClient.prefetchQuery(['tasks'], supabaseGetTasks, {
//             // onSuccess will be handled by useQuery's onSuccess too if provided
//         });
//     } catch (err) {
//         // network error: keep localTasks, we'll sync later
//         console.warn("prefetch supabase failed, offline or server down", err);
//     }
// }
