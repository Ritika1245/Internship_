"use client"
import { useState } from 'react';
import { addProject } from "@/app/lib/actions";
import styles from "@/app/Components/dashboard/projects/addProject/addProject.module.css";

const AddProjectPage = () => {
  const [features, setFeatures] = useState([{ name: '', checklist: [{ name: ''  }] }]);
  const [statuses, setStatuses] = useState([{ date: '', features: [{ name: '', checklist: [{ name: '' }] }] }]);

  const addNewFeature = () => {
    setFeatures([...features, { name: '', checklist: [{ name: ''}] }]);
  };

  const addNewStatus = () => {
    setStatuses([...statuses, { date: '', features: [{ name: '', checklist: [{ name: '',}] }] }]);
  };

  const handleFeatureChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...features];
    list[index][name] = value;
    setFeatures(list);
  };

  const handleChecklistChange = (featureIndex, checklistIndex, event) => {
    const { name, value } = event.target;
    const list = [...features];
    list[featureIndex].checklist[checklistIndex][name] = value;
    setFeatures(list);
  };

  const handleStatusChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...statuses];
    list[index][name] = value;
    setStatuses(list);
  };

  const handleStatusFeatureChange = (statusIndex, featureIndex, event) => {
    const { name, value } = event.target;
    const list = [...statuses];
    list[statusIndex].features[featureIndex][name] = value;
    setStatuses(list);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={addProject} className={styles.form}>
        <input type="text" placeholder="Title" name="title" required />
        <input type="number" placeholder="Repository Name" name="repository_name" required />
        <input type="number" placeholder="Repository URL" name="repository_url" required />
        <input type="text" placeholder="Repository Owner" name="repository_owner" />
        <input type="text" placeholder="access_token" name="access_token" />
        <textarea required name="description" id="desc" rows="12" placeholder="Description"></textarea>

        <div className="panel panel-primary">
          <div className="panel-heading clearfix">
            <div className="pull-left">
              <h1 className="panel-title">Add Features</h1>
            </div>
            <div className="pull-right">
              <button type="button" className="btn btn-sm btn-success" onClick={addNewFeature} title="Add Feature">+</button>
            </div>
          </div>
          <div className="panel-body">
            {features.map((feature, featureIndex) => (
              <div key={featureIndex}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Feature Name"
                  name="  "
                  value={feature.name}
                  onChange={(e) => handleFeatureChange(featureIndex, e)}
                />
                <h4>Checklist</h4>
                {feature.checklist.map((item, checklistIndex) => (
                  <div key={checklistIndex}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Checklist Item"
                      name="name"
                      value={item.name}
                      onChange={(e) => handleChecklistChange(featureIndex, checklistIndex, e)}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="panel panel-primary">
          <div className="panel-heading clearfix">
            <div className="pull-left">
              <h1 className="panel-title">Add Statuses</h1>
            </div>
            <div className="pull-right">
              <button type="button" className="btn btn-sm btn-success" onClick={addNewStatus} title="Add Status">+</button>
            </div>
          </div>
          <div className="panel-body">
            {statuses.map((status, statusIndex) => (
              <div key={statusIndex}>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Date"
                  name="date"
                  value={status.date}
                  onChange={(e) => handleStatusChange(statusIndex, e)}
                />
                <h4>Features</h4>
                {status.features.map((feature, featureIndex) => (
                  <div key={featureIndex}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Feature Name"
                      name="name"
                      value={feature.name}
                      onChange={(e) => handleStatusFeatureChange(statusIndex, featureIndex, e)}
                    />
                    <h5>Checklist</h5>
                    {feature.checklist.map((item, checklistIndex) => (
                      <div key={checklistIndex}>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Checklist Item"
                          name="name"
                          value={item.name}
                          onChange={(e) => handleStatusFeatureChange(statusIndex, featureIndex, e)}
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProjectPage;
