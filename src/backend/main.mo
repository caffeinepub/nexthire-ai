import Set "mo:core/Set";
import Text "mo:core/Text";

actor {
  let emails = Set.empty<Text>();

  public shared ({ caller }) func saveEmail(email : Text) : async () {
    emails.add(email);
  };
};
