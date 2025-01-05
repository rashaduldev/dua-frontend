// components/SettingsSidebar.js
export default function SettingsSidebar() {
    return (
      <div className="w-full bg-gray-100 p-6 rounded-md shadow-lg">
        <div className="flex items-center justify-center mb-6">
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
        </div>
        <h2 className="text-lg font-medium text-gray-700 text-center mb-6">
          Settings
        </h2>
        <div className="space-y-4">
          {/* Language Settings */}
          <div className="p-4 bg-white rounded-md shadow">
            <div className="flex items-center mb-3">
              <span className="inline-flex items-center justify-center w-6 h-6 bg-green-500 text-white rounded-full">
                🌐
              </span>
              <h3 className="ml-3 font-medium text-gray-700">Language Settings</h3>
            </div>
            <div className="flex space-x-4">
              <button className="w-full py-2 text-center text-white bg-green-500 rounded-md">
                English
              </button>
              <button className="w-full py-2 text-center text-gray-700 border border-gray-300 rounded-md">
                বাংলা
              </button>
            </div>
          </div>
          {/* Other Settings */}
          {["General Settings", "Font Settings", "Appearance Settings"].map(
            (setting) => (
              <div
                key={setting}
                className="p-4 bg-gray-50 rounded-md border border-gray-200 flex items-center"
              >
                <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-300 text-gray-600 rounded-full">
                  ⬤
                </span>
                <h3 className="ml-3 font-medium text-gray-700">{setting}</h3>
              </div>
            )
          )}
        </div>
      </div>
    );
  }
  