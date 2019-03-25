import React from 'react'
import PropTypes from 'prop-types'

import FieldsetTitle from '../Components/FieldsetTitle'
import GroupItem from '../Components/GroupItem'

export class ContactGroupsList extends React.Component {
  render() {
    const { contact, allGroups, title } = this.props
    const userGroups = contact.groups.data
      .filter(group => group)
      .map(userGroup => allGroups.find(group => group._id === userGroup._id))
      .filter(value => value)

    return (
      <div className="u-mb-2">
        {title && <FieldsetTitle title={title} />}
        <ol className="u-nolist u-m-0 u-p-0">
          {userGroups.map(group => (
            <GroupItem key={group._id}>{group.name}</GroupItem>
          ))}
        </ol>
      </div>
    )
  }
}

ContactGroupsList.propTypes = {
  contact: PropTypes.object.isRequired,
  allGroups: PropTypes.array.isRequired,
  title: PropTypes.string
}

export default ContactGroupsList