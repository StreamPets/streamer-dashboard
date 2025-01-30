interface DashboardProps {
    overlayId: string;
    channelId: string;
}

function Dashboard({ overlayId, channelId }: DashboardProps) {
    return (
        <>
            <h1>Dashboard</h1>
            <h2>
                https://overlay.streampets.io?overlayId={overlayId}&channelId=
                {channelId}
            </h2>
        </>
    );
}

export default Dashboard;
