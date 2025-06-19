'use client';

import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { ChartType, ChartData, ChartOptions, TooltipItem } from 'chart.js';

// Utility function to wrap long labels
const wrapLabel = (str: string, maxLen: number): string | string[] => {
    if (str.length <= maxLen) {
        return str;
    }
    const words = str.split(' ');
    const lines: string[] = [];
    let currentLine = '';
    for (const word of words) {
        if ((currentLine + (currentLine ? ' ' : '') + word).length <= maxLen) {
            currentLine += (currentLine ? ' ' : '') + word;
        } else {
            lines.push(currentLine.trim());
            currentLine = word;
        }
    }
    lines.push(currentLine.trim());
    return lines;
};

// Common tooltip title callback for Chart.js
const tooltipTitleCallback = (tooltipItems: TooltipItem<ChartType>[]): string => {
    const item = tooltipItems[0];
    const label = item.chart.data.labels?.[item.dataIndex];
    if (Array.isArray(label)) {
      return label.join(' ');
    }
    return label as string;
};

interface ChartWrapperProps {
    chartType: ChartType;
    data: ChartData;
    options: ChartOptions;
}

// Reusable Chart Component
const ChartWrapper: React.FC<ChartWrapperProps> = ({ chartType, data, options }) => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstance = useRef<Chart | null>(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                chartInstance.current = new Chart(ctx, {
                    type: chartType,
                    data: data,
                    options: {
                        ...options,
                        plugins: {
                            ...options.plugins,
                            tooltip: {
                                ...(options.plugins?.tooltip), // Use optional chaining to safely spread tooltip properties
                                callbacks: {
                                    ...(options.plugins?.tooltip as any)?.callbacks, // Use as any for callbacks to avoid deep type issues
                                    title: tooltipTitleCallback
                                }
                            }
                        }
                    },
                });
            }
        }

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [chartType, data, options]);

    return (
        <div className="chart-container w-full max-w-xl mx-auto h-72 md:h-96 max-h-[400px]">
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default function TextPitch() {
    const EnergeticPlayfulColors: string[] = ['#00A676', '#3B5998', '#FF6B6B', '#FFD166', '#a1c181'];

    // Shared chart options for all charts - only truly universal options
    const sharedChartOptions: ChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom' as const,
                labels: {
                    color: '#4A5568'
                }
            },
        }
        // Removed 'scales' and 'cutout' as they are chart-type specific
    };

    return (
        <div className="text-gray-800" style={{ fontFamily: "'Inter', sans-serif" }}>
            <script src="https://cdn.tailwindcss.com"></script>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet" />
{/* 
            <header className="bg-white shadow-md sticky top-0 z-50">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-[#00A676]">Your Company Name</h1>
                    <nav className="hidden md:flex space-x-8">
                        <a href="#problem" className="text-gray-600 hover:text-[#00A676]">The Problem</a>
                        <a href="#market" className="text-gray-600 hover:text-[#00A676]">Market</a>
                        <a href="#solution" className="text-gray-600 hover:text-[#00A676]">Solution</a>
                        <a href="#model" className="text-gray-600 hover:text-[#00A676]">Model</a>
                        <a href="#ask" className="text-gray-600 hover:text-[#00A676]">The Ask</a>
                    </nav>
                </div>
            </header> */}

            <main className="container mx-auto mt-4 p-6 md:p-12">

                <section id="intro" className="text-center mb-24">
                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">The Future of Wellness is Holistic & Global</h2>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">An investor's look into a scalable platform connecting ancient Ayurvedic wisdom with the modern, multi-trillion dollar wellness industry.</p>
                </section>

                <section id="problem" className="mb-24">
                    <h3 className="text-3xl font-bold text-center mb-12">Addressing the Global Wellness Paradox</h3>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="text-5xl mb-4 text-[#FF6B6B]">⚠️</div>
                            <h4 className="text-xl font-bold mb-2">Global Health Crisis</h4>
                            <p className="text-gray-600">Rising prevalence of lifestyle diseases, stress, and chronic conditions are pushing consumers to seek preventative solutions.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="text-5xl mb-4 text-[#FFD166]">🌍</div>
                            <h4 className="text-xl font-bold mb-2">Limited Holistic Access</h4>
                            <p className="text-gray-600">Authentic Ayurvedic care is geographically constrained, inconsistent, and difficult to access for a global audience.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="text-5xl mb-4 text-[#00A676]">💡</div>
                            <h4 className="text-xl font-bold mb-2">Unmet Wellness Needs</h4>
                            <p className="text-gray-600">Individuals are actively seeking integrated, personalized, full-body wellness solutions, not just episodic treatments.</p>
                        </div>
                    </div>
                </section>

                <section id="market" className="mb-24">
                    <h3 className="text-3xl font-bold text-center mb-4">A Trillion-Dollar Industry in Transformation</h3>
                    <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">We are positioned at the intersection of three booming markets, creating a powerful investment opportunity.</p>
                    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                            <p className="text-2xl font-semibold text-gray-700">The Global Wellness Market</p>
                            <p className="text-8xl font-black text-[#00A676] my-4">$5.6T</p>
                            <p className="text-gray-600">This massive, growing market shows a clear consumer shift towards proactive health and wellness spending.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h4 className="text-2xl font-bold text-center mb-4">Projected Ayurveda Market Growth</h4>
                            <p className="text-gray-600 text-center mb-4">The demand for Ayurvedic solutions is accelerating, driven by increased awareness and acceptance globally.</p>
                            <ChartWrapper
                                chartType="line"
                                data={{
                                    labels: ['2024', '2026', '2028', '2030'],
                                    datasets: [{
                                        label: 'Market Size (USD Billion)',
                                        data: [18.15, 30.5, 49.0, 76.91],
                                        borderColor: EnergeticPlayfulColors[0],
                                        backgroundColor: 'rgba(0, 166, 118, 0.1)',
                                        fill: true,
                                        tension: 0.4
                                    }]
                                }}
                                options={{
                                    ...sharedChartOptions,
                                    scales: { // Scales are specific to line/bar charts
                                        y: {
                                            beginAtZero: true,
                                            ticks: { color: '#4A5568' },
                                            grid: { color: '#E2E8F0' }
                                        },
                                        x: {
                                            ticks: { color: '#4A5568' },
                                            grid: { color: '#E2E8F0' }
                                        }
                                    }
                                }}
                            />
                        </div>
                    </div>
                </section>

                <section id="solution" className="mb-24">
                    <h3 className="text-3xl font-bold text-center mb-4">Our Solution: A Global Gateway to Holistic Wellness</h3>
                     <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">We are an Ayurvedic healthcare optimization platform that seamlessly connects individuals with certified doctors worldwide.</p>
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h4 className="text-2xl font-bold text-center mb-8">How It Works: The Patient Journey</h4>
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-4">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-24 h-24 bg-[#E6FFFA] rounded-full flex items-center justify-center text-4xl text-[#00A676] mb-2">👤</div>
                                <p className="font-bold">1. Sign Up</p>
                                <p className="text-sm text-gray-600">User selects a subscription tier.</p>
                            </div>
                            <div className="hidden md:block border-t-4 border-dashed border-[#00A676] flex-grow mx-4"></div>
                             <div className="md:hidden border-l-4 border-dashed border-[#00A676] h-12"></div>
                            <div className="flex flex-col items-center text-center">
                                <div className="w-24 h-24 bg-[#E6FFFA] rounded-full flex items-center justify-center text-4xl text-[#00A676] mb-2">🧑‍⚕️</div>
                                <p className="font-bold">2. Consultation</p>
                                <p className="text-sm text-gray-600">Personalized virtual assessment.</p>
                            </div>
                             <div className="hidden md:block border-t-4 border-dashed border-[#00A676] flex-grow mx-4"></div>
                             <div className="md:hidden border-l-4 border-dashed border-[#00A676] h-12"></div>
                            <div className="flex flex-col items-center text-center">
                                <div className="w-24 h-24 bg-[#E6FFFA] rounded-full flex items-center justify-center text-4xl text-[#00A676] mb-2">📜</div>
                                <p className="font-bold">3. Receive Plan</p>
                                <p className="text-sm text-gray-600">Get a tailored Ayurvedic team of doctors and plan.</p>
                            </div>
                             <div className="hidden md:block border-t-4 border-dashed border-[#00A676] flex-grow mx-4"></div>
                             <div className="md:hidden border-l-4 border-dashed border-[#00A676] h-12"></div>
                            <div className="flex flex-col items-center text-center">
                                <div className="w-24 h-24 bg-[#E6FFFA] rounded-full flex items-center justify-center text-4xl text-[#00A676] mb-2">📈</div>
                                <p className="font-bold">4. Track Progress</p>
                                <p className="text-sm text-gray-600">Engage and monitor wellness.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="model" className="mb-24">
                     <h3 className="text-3xl font-bold text-center mb-12">Business Model: Predictable & Scalable Revenue</h3>
                     <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h4 className="text-2xl font-bold text-center mb-4">Revenue Streams</h4>
                             <p className="text-gray-600 text-center mb-4">Our model is built on high-value subscriptions, with multiple avenues for future growth and expansion.</p>
                            <ChartWrapper
                                chartType="doughnut"
                                data={{
                                    labels: ['Primary: Subscriptions', 'Secondary: Add-ons'],
                                    datasets: [{
                                        label: 'Revenue Focus',
                                        data: [80, 20],
                                        backgroundColor: [EnergeticPlayfulColors[0], EnergeticPlayfulColors[3]],
                                        borderColor: '#FFFFFF',
                                        borderWidth: 4
                                    }]
                                }}
                                options={{
                                    ...sharedChartOptions,
                                    cutout: '70%', // 'cutout' is specific to doughnut charts
                                    scales: {} // Doughnut charts don't use scales
                                }}
                            />
                        </div>
                         <div className="bg-white p-8 rounded-lg shadow-lg">
                             <h4 className="text-2xl font-bold text-center mb-4">Financial Projections</h4>
                             <p className="text-gray-600 text-center mb-4">Based on conservative user acquisition and strong retention, we project significant revenue growth.</p>
                            <ChartWrapper
                                chartType="bar"
                                data={{
                                    labels: ['Year 1', 'Year 3', 'Year 5'],
                                    datasets: [{
                                        label: 'Projected Revenue (USD Million)',
                                        data: [2, 15, 50],
                                        backgroundColor: [EnergeticPlayfulColors[3], EnergeticPlayfulColors[2], EnergeticPlayfulColors[0]],
                                        borderRadius: 8
                                    }]
                                }}
                                options={{
                                    ...sharedChartOptions,
                                    scales: { // Scales are specific to line/bar charts
                                        y: {
                                            beginAtZero: true,
                                            ticks: { color: '#4A5568' },
                                            grid: { display: false }
                                        },
                                        x: {
                                            ticks: { color: '#4A5568' },
                                            grid: { display: false }
                                        }
                                    }
                                }}
                            />
                        </div>
                     </div>
                </section>

                 <section id="roadmap" className="mb-24">
                    <h3 className="text-3xl font-bold text-center mb-12">Our Progress & Vision</h3>
                    <div className="relative w-full max-w-4xl mx-auto">
                        <div className="absolute left-1/2 w-1 bg-[#00A676] h-full -translate-x-1/2"></div>
                        <div className="relative mb-8">
                            <div className="flex items-center">
                                <div className="w-1/2 pr-8 text-right">
                                    <p className="font-bold text-lg">Next 6 Months</p>
                                    <p className="text-gray-600">Platform development complete, Beta launch with pilot users & doctors.</p>
                                </div>
                                <div className="absolute left-1/2 w-6 h-6 bg-white border-4 border-[#00A676] rounded-full -translate-x-1/2 z-10"></div>
                                <div className="w-1/2"></div>
                            </div>
                        </div>
                        <div className="relative mb-8">
                            <div className="flex items-center">
                                <div className="w-1/2"></div>
                                <div className="absolute left-1/2 w-6 h-6 bg-white border-4 border-[#00A676] rounded-full -translate-x-1/2 z-10"></div>
                                <div className="w-1/2 pl-8 text-left">
                                    <p className="font-bold text-lg">Next 12-18 Months</p>
                                    <p className="text-gray-600">Official launch in target regions, acquire first 10,000 subscribers, build key partnerships.</p>
                                </div>
                            </div>
                        </div>
                         <div className="relative">
                            <div className="flex items-center">
                                <div className="w-1/2 pr-8 text-right">
                                    <p className="font-bold text-lg">Long-Term Vision</p>
                                    <p className="text-gray-600">Become the global market leader in Ayurvedic telehealth, integrating advanced AI for predictive wellness.</p>
                                </div>
                                <div className="absolute left-1/2 w-6 h-6 bg-white border-4 border-[#00A676] rounded-full -translate-x-1/2 z-10"></div>
                                <div className="w-1/2"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="ask" className="mb-24 bg-[#3B5998] text-white p-8 md:p-12 rounded-lg shadow-2xl">
                    <h3 className="text-3xl font-bold text-center mb-12">The Ask: Fueling Global Expansion</h3>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-2xl font-bold mb-4">We are seeking <span className="text-[#FFD166]">[20LAKH]</span> in Seed funding.</p>
                            <p className="mb-6">This investment will enable us to accelerate platform development, expand our global doctor network, and scale user acquisition to capture a significant share of this booming market.</p>
                            <ul className="space-y-2">
                                <li><span className="font-bold text-[#FFD166]">40%</span> - Technology & Product</li>
                                <li><span className="font-bold text-[#FFD166]">30%</span> - Marketing & Sales</li>
                                <li><span className="font-bold text-[#FFD166]">20%</span> - Team Expansion</li>
                                <li><span className="font-bold text-[#FFD166]">10%</span> - Operations</li>
                            </ul>
                        </div>
                        <ChartWrapper
                            chartType="doughnut"
                            data={{
                                
                                labels: [
                                    wrapLabel('Technology & Product', 16),
                                    wrapLabel('Marketing & Sales', 16),
                                    wrapLabel('Team Expansion', 16),
                                    'Operations'
                                ],
                                datasets: [{
                                    label: 'Use of Funds',
                                    data: [40, 30, 20, 10],
                                    backgroundColor: [EnergeticPlayfulColors[3], EnergeticPlayfulColors[2], EnergeticPlayfulColors[0], EnergeticPlayfulColors[1]],
                                    borderColor: EnergeticPlayfulColors[1],
                                    borderWidth: 4,
                                }]
                            }}
                            options={{
                                ...sharedChartOptions,
                                cutout: '60%', // 'cutout' is specific to doughnut charts
                                scales: {} // Doughnut charts don't use scales
                            }}
                        />
                    </div>
                </section>

                <footer className="text-center pt-12 border-t">
                     <p className="text-xl font-bold text-[#00A676]">Ilaram healthcare Pvt Ltd.</p>
                     <p className="text-gray-600">Join us in revolutionizing global holistic wellness.</p>
                     <p className="mt-4 text-sm">[www.ilaramhealthcare.com] | [admin@ilaramhealthcare.com] | [+918778919303]</p>
                </footer>

            </main>
        </div>
    );
}
