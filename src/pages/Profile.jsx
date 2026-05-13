export default function Profile() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Profile Settings</h1>
      <p className="text-gray-500 mb-6">
        Manage your account information
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        
        {/* LEFT */}
        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-4">
            Personal Information
          </h2>

          <div className="mb-4">
            <label className="text-sm">Full Name</label>
            <input
              className="w-full border p-3 rounded mt-1"
              defaultValue="Tabitha Mburu"
            />
          </div>

          <div className="mb-4">
            <label className="text-sm">Email</label>
            <input
              className="w-full border p-3 rounded mt-1 bg-gray-100"
              value="student@moringa.com"
              disabled
            />
          </div>

          <button className="bg-purple-600 text-white px-4 py-2 rounded">
            Save Changes
          </button>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-5 rounded-xl">
            <h3>Your Progress</h3>
            <h1 className="text-3xl font-bold">1</h1>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold">Account Status</h3>
            <p className="text-sm mt-2">Status: Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}