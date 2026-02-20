import Map "mo:core/Map";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Nat "mo:core/Nat";
import Iter "mo:core/Iter";

actor {
  type Lead = {
    fullName : Text;
    email : Text;
    country : Text;
    targetJobRole : Text;
    createdAt : Int;
  };

  let leads = Map.empty<Text, Lead>();

  public type LeadError = {
    #duplicateEmail;
  };

  public shared ({ caller }) func createLead(
    fullName : Text,
    email : Text,
    country : Text,
    targetJobRole : Text,
  ) : async ?LeadError {
    switch (leads.get(email)) {
      case (?_) { ?#duplicateEmail };
      case (null) {
        let lead : Lead = {
          fullName;
          email;
          country;
          targetJobRole;
          createdAt = Time.now();
        };
        leads.add(email, lead);
        null;
      };
    };
  };

  public query ({ caller }) func getLead(email : Text) : async ?Lead {
    leads.get(email);
  };

  public query ({ caller }) func getAllLeads() : async [Lead] {
    leads.values().toArray();
  };

  public query ({ caller }) func getLeadsCount() : async Nat {
    leads.size();
  };
};
