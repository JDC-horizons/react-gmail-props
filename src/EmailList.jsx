const EmailList = ({ emails, toggleRead, toggleStar }) => {
  return (
    <ul>
      {emails.map((email) => (
        <EmailItem
          key={email.id}
          email={email}
          toggleRead={toggleRead}
          toggleStar={toggleStar}
        />
      ))}
    </ul>
  );
};

const EmailItem = ({ email, toggleRead, toggleStar }) => {
  return (
    <li className={`email ${email.read ? "read" : "unread"}`}>
      <div className="select">
        <input
          className="select-checkbox"
          type="checkbox"
          checked={email.read}
          onChange={() => toggleRead(email)}
        />
      </div>
      <div className="star">
        <input
          className="star-checkbox"
          type="checkbox"
          checked={email.starred}
          onChange={() => toggleStar(email)}
        />
      </div>
      <div className="sender">{email.sender}</div>
      <div className="title">{email.title}</div>
    </li>
  );
};

export default EmailList;
