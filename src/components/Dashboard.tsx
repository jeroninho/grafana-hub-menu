const Dashboard = () => {
  const dashboardUrl = "https://core-n8n-grafana.1beqf3.easypanel.host/d/8a2214b6-c0ce-4212-9bb1-f55558098841/leads-formulario?orgId=1&from=now-2d&to=now&timezone=browser&refresh=30s&kiosk&theme=light";

  return (
    <section className="flex-1 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Leads Dashboard
          </h1>
          <p className="text-muted-foreground">
            Monitoramento em tempo real dos formulários de leads
          </p>
        </div>

        <div className="rounded-lg overflow-hidden shadow-elegant border bg-card">
          <iframe
            src={dashboardUrl}
            width="100%"
            height="900"
            className="w-full border-0"
            title="Grafana Dashboard - Leads Formulário"
            loading="lazy"
          />
        </div>

        <div className="mt-4 text-sm text-muted-foreground text-center">
          Dashboard atualizado automaticamente a cada 30 segundos
        </div>
      </div>
    </section>
  );
};

export default Dashboard;