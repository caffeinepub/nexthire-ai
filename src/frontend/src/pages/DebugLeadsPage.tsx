import { useAllLeads } from '../hooks/useQueries';

export default function DebugLeadsPage() {
  const { data: leads, isLoading, isError } = useAllLeads();

  const formatDate = (timestamp: bigint) => {
    // Convert nanoseconds to milliseconds
    const milliseconds = Number(timestamp / 1_000_000n);
    const date = new Date(milliseconds);
    
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Debug: All Leads</h1>
          <p className="text-foreground/70">Testing page - displays all records from the Leads collection</p>
        </div>

        {isLoading && (
          <div className="py-8">
            <p className="text-foreground/70">Loading leads...</p>
          </div>
        )}

        {isError && (
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
            <p className="text-destructive font-medium">Error loading leads</p>
          </div>
        )}

        {!isLoading && !isError && leads && leads.length === 0 && (
          <div className="bg-muted/50 border border-border rounded-lg p-8">
            <p className="text-foreground/70">No leads found</p>
          </div>
        )}

        {!isLoading && !isError && leads && leads.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border px-4 py-2 text-left font-semibold">Full Name</th>
                  <th className="border border-border px-4 py-2 text-left font-semibold">Email</th>
                  <th className="border border-border px-4 py-2 text-left font-semibold">Country</th>
                  <th className="border border-border px-4 py-2 text-left font-semibold">Target Job Role</th>
                  <th className="border border-border px-4 py-2 text-left font-semibold">Created At</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead, index) => (
                  <tr key={`${lead.email}-${index}`} className="hover:bg-muted/50">
                    <td className="border border-border px-4 py-2">{lead.fullName}</td>
                    <td className="border border-border px-4 py-2">{lead.email}</td>
                    <td className="border border-border px-4 py-2">{lead.country}</td>
                    <td className="border border-border px-4 py-2">{lead.targetJobRole || '-'}</td>
                    <td className="border border-border px-4 py-2 text-foreground/70">
                      {formatDate(lead.createdAt)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4 text-sm text-foreground/60">
              Total records: {leads.length}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
