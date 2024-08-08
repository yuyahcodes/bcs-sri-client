"use client";

import React, { useState, useEffect } from 'react';
import { SettingsIcon } from "lucide-react";
import { DropdownMenu } from '@radix-ui/react-dropdown-menu';
import {
    DropdownMenuContent,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

type FilterProps = {
    onFilterChange: (filters: any) => void;
};

const CsoFilterReport: React.FC<FilterProps> = ({ onFilterChange }) => {
    const genderEthnicityOptions = ["Muslims", "Sinhala", "Tamil", "Women", "LGBTQIA+"];

    const [isOpen, setIsOpen] = useState(false);
    const [filters, setFilters] = useState({
        gender_ethnicity: genderEthnicityOptions[0],
        starting_date: '2023-01-03', // Change format to YYYY-MM-DD
        ending_date: '2023-01-04',   // Change format to YYYY-MM-DD
        language: 'English Sinhala and tamil',
        area: 'all sri lanka',
        sector: 'education'
    });

    useEffect(() => {
        onFilterChange(filters);
    }, []);

    const handleFilterChange = (name: string, value: string) => {
        setFilters({
            ...filters,
            [name]: value
        });
    };

    const applyFilters = () => {
        onFilterChange(filters);
        setIsOpen(false);
    };

    return (
        <div className="mb-4">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-[200px] justify-start flex gap-2 bg-blueGem-600 text-white px-4 py-2 rounded hover:bg-blueGem-800 hover:text-white">
                        <SettingsIcon /> Main Filter
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-70 p-4 border rounded bg-gray-50">
                    <div className="mb-2">
                        <label className="block text-sm font-medium text-gray-700">Cso Name</label>
                        <input
                            type="text"
                            name="area"
                            value={filters.area}
                            onChange={(e) => handleFilterChange('area', e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <DropdownMenuLabel>Gender/Ethnicity</DropdownMenuLabel>
                    <DropdownMenuSeparator/>

                    <Select
                        value={filters.gender_ethnicity}
                        onValueChange={(value) => handleFilterChange('gender_ethnicity', value)}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select Gender/Ethnicity"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {genderEthnicityOptions.map((option) => (
                                    <SelectItem key={option} value={option}>
                                        {option}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <DropdownMenuSeparator/>

                    <div className="mb-2">
                        <label className="block text-sm font-medium text-gray-700">Starting Date</label>
                        <input
                            type="date"
                            name="starting_date"
                            value={filters.starting_date}
                            onChange={(e) => handleFilterChange('starting_date', e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-sm font-medium text-gray-700">Ending Date</label>
                        <input
                            type="date"
                            name="ending_date"
                            value={filters.ending_date}
                            onChange={(e) => handleFilterChange('ending_date', e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-sm font-medium text-gray-700">Language</label>
                        <input
                            type="text"
                            name="language"
                            value={filters.language}
                            onChange={(e) => handleFilterChange('language', e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-sm font-medium text-gray-700">Area</label>
                        <input
                            type="text"
                            name="area"
                            value={filters.area}
                            onChange={(e) => handleFilterChange('area', e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-sm font-medium text-gray-700">Sector</label>
                        <input
                            type="text"
                            name="sector"
                            value={filters.sector}
                            onChange={(e) => handleFilterChange('sector', e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <Button onClick={applyFilters} className="bg-green-500 text-white px-4 py-2 rounded mt-2">
                        Apply Filters
                    </Button>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default CsoFilterReport;
