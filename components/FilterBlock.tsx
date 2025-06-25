'use client'

type Props = {
  category: string
  setCategory: (value: string) => void
  location: string
  setLocation: (value: string) => void
  handleFilter: () => void
}

export default function FilterBlock({
  category,
  setCategory,
  location,
  setLocation,
  handleFilter,
}: Props) {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border  dark:bg-white p-2 rounded"
      >
        <option value="">All Categories</option>
        <option value="Singer">Singer</option>
        <option value="Dancer">Dancer</option>
        <option value="Speaker">Speaker</option>
        <option value="DJ">DJ</option>
      </select>

      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border dark:bg-white
         p-2 rounded"
      />

      <button onClick={handleFilter} className="bg-blue-600 text-white px-4 py-2 rounded">
        Apply Filters
      </button>
    </div>
  )
}
