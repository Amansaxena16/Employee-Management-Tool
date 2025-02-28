import Header from "./Header"

function AdminDashboard() {
    return (
        <>
                <Header/>

                {/* creating tast form */}

                <div class="flex justify-center items-center min-h-screen bg-gray-100 py-3">
                    <form class="bg-white shadow-lg rounded-lg p-6 w-96">
                        <h2 class="text-xl font-semibold text-gray-700 text-center mb-4">Create a Task</h2>

                        <label class="block text-gray-600 font-medium mb-1">Task Title</label>
                        <input type="text" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"/>

                        <label class="block text-gray-600 font-medium mb-1">Description</label>
                        <textarea cols="30" rows="5" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"></textarea>

                        <label class="block text-gray-600 font-medium mb-1">Date</label>
                        <input type="date" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"/>

                        <label class="block text-gray-600 font-medium mb-1">Assign To</label>
                        <input type="text" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"/>

                        <label class="block text-gray-600 font-medium mb-1">Category</label>
                        <input type="text" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"/>

                        <button class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                            Create Task
                        </button>
                    </form>
                </div>

        </>
    )
}

export default AdminDashboard