import React from 'react';

const DropdownFilter = ({setFeedName, searchByApplied, setSearchByApplied, setSearchByProfile }) => {
  const handleAppliedChange = (event) => {
    setSearchByApplied(event.target.value);
    setFeedName(event.target.value + ' Posts');
  };

  const handleProfileChange = (event) => {
    setSearchByProfile(event.target.value);
    if(event.target.value === 'All'){
      setFeedName('All Posts');
    }
    else {
        setFeedName('Based on your Skills Posts');
    }
  };

  return (
    <div className="flex justify-center space-x-20 my-4">
      <select className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={handleAppliedChange}>
        <option value="All">All</option>
        <option value="Applied">Applied</option>
        <option value="Not Applied">Not Applied</option>
      </select>
      <select className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={handleProfileChange}>
        <option value="All">All Tags</option>
        <option value="Profile">Based on my Skills</option>
      </select>
    </div>
  );
};

export default DropdownFilter;
