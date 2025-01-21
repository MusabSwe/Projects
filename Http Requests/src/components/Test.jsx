import { useEffect } from "react";

const Test = () => {

    const chartData = [{
        SectionName: 'Credit Cards',
        data: [
            {
                logicalName: 'cardClass',
                items: [
                    {
                        key: 'VISA SILVER STAFF',
                        selected: false,
                    },
                    {
                        key: 'VIRTUAL CARD SILVER',
                        selected: false,
                    },
                    {
                        key: 'VISA TAMKEEN PLATINUM',
                        selected: true,
                    },
                    {
                        key: 'Revolving Platinum Cards',
                        selected: false,
                    },
                    {
                        key: 'Revolving Signature Cards',
                        selected: false,
                    },
                    {
                        key: 'Revolving Infinite Cards',
                        selected: false,
                    },
                    {
                        key: 'Revolving Classic Cards',
                        selected: false,
                    },
                ],
            },
        ],
    },
    ];

    const filterData = ['VISA SILVER STAFF',
        'VIRTUAL CARD SILVER',
        'VISA TAMKEEN PLATINUM',
        'Revolving Platinum Cards',
        'Revolving Signature Cards',
        'Revolving Infinite Cards',
        'Revolving Classic Cards',
    ];

    const filterItems = {
        'VISA SILVER STAFF': false,
        'VIRTUAL CARD SILVER': false,
        'VISA TAMKEEN PLATINUM': true,
        'Revolving Platinum Cards': false,
        'Revolving Signature Cards': false,
        'Revolving Infinite Cards': true,
        'Revolving Classic Cards': false,
    };
    function getSelectedData() {
        const selectedChart = chartData.filter(
            chart => chart.SectionName == 'Credit Cards'
        )[0]?.data[0]?.items;
        console.log('selectedChart: ', selectedChart);

        filterData.map((item, index) => {
            const selectedData = selectedChart.filter(data => data?.key == item)[0];
            console.log('index: ', index, selectedData);
            if (filterItems[item] === true || selectedData.selected) {
                console.log('selected item: ', item);
            }
        });
    }
    useEffect(() => {
        console.log(getSelectedData());
    }, []);

    return (
        <>

        </>
    );
}

export default Test;