import React, { Component } from 'react'

export default class Member extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div class="row">
                    <div className="col-6">
                        <form>
                            <div className="form-row">
                                <div className="form-group col-6">
                                    <label> Email </label>
                                    <input type="eamil" className="form-control" />
                                </div>
                                <div className="form-group col-6">
                                    <label> Password </label>
                                    <input type="password" className="form-control" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-4">
                                    <label>ชื่อ</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group col-4">
                                    <label>นามสกุล</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group col-2">
                                    <label>เพศ</label>
                                    <div>
                                        <input type="radio" className="form-check-inline" />ชาย
                                <input type="radio" className="form-check-inline" />หญิง
                            </div>
                                </div>
                                <div className="form-group col-2">
                                    <label>สถานะ</label>
                                    <select className="form-control">
                                        <option>โสด</option>
                                        <option>สมรส</option>
                                        <option>หม้าย</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-6">
                                    <label>ที่อยู่</label>
                                    <textarea className="form-control"></textarea>
                                </div>
                                <div className="form-group col-6">
                                    <label>เบอร์โทร</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-12">
                                    <button className="btn btn-success">บันทึก</button>
                                    <button className="btn btn-danger">ยกเลิก</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="col-6">
                        <table className="table table-dark">
                            <thead>
                                <th>ชื่อ</th>
                                <th>นามสกุล</th>
                                <th>อีเมล</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>สมประเสริฐ</td>
                                    <td>ศรีโรจน์รุ่ง</td>
                                    <td>mick_sir43@hotmail.com</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
